import type { NationalGroup } from '$lib/types.js'
import { json, error } from '@sveltejs/kit'
import { fetchAllPages } from '$lib/airtable.js'

const AIRTABLE_URL = 'https://api.airtable.com/v0/appWPTGqZmUcs3NWu/National%20Groups'

/**
 * Converts an Airtable record to a NationalGroup object
 */
function recordToNationalGroup(record: any): NationalGroup {
	// Debug: Log all field names to help identify the Linktree field
	console.log('Record fields for', record.fields.Name, ':', Object.keys(record.fields))

	return {
		id: record.id || 'noId',
		name: record.fields.Name || '',
		notes: record.fields.Notes || '',
		// Use leader_name if available, otherwise just indicate if Leader exists
		leader: record.fields.leader_name
			? record.fields.leader_name[0]
			: record.fields.Leader
				? 'Yes'
				: 'No',
		// The discord_username field name may vary
		discordUsername: record.fields.discord_username
			? record.fields.discord_username[0]
			: record.fields['discord_username (from Leader)']
				? record.fields['discord_username (from Leader)'][0]
				: '',
		// Include email if available
		email: record.fields.email ? record.fields.email[0] : '',
		legalEntity: record.fields['Legal entity'] === 'Yes',
		// Overseer is an array of record IDs
		overseer: record.fields.Overseer ? 'Yes' : 'No',
		xLink: record.fields.X || '',
		discordLink: record.fields.Discord || '',
		whatsappLink: record.fields.Whatsapp || '',
		website: record.fields.website || '',
		linktreeLink: record.fields.linktree || '',
		// Add Instagram and TikTok links
		instagramLink: record.fields.Instagram || record.fields.instagram || '',
		tiktokLink: record.fields.TikTok || record.fields.Tiktok || record.fields.tiktok || '',
		public: true // Assuming all records are public by default
	}
}

export async function GET({ fetch, setHeaders }) {
	setHeaders({
		'cache-control': 'public, max-age=3600' // 1 hour in seconds
	})

	try {
		const records = await fetchAllPages(fetch, AIRTABLE_URL)

		const out: NationalGroup[] = records
			.map(recordToNationalGroup)
			// Sort alphabetically by name
			.sort((a, b) => a.name.localeCompare(b.name))

		return json(out)
	} catch (e) {
		console.error('Error fetching national groups:', e)
		return error(500, e instanceof Error ? e.message : 'Failed to fetch national groups')
	}
}
