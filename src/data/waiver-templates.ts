/** The four supplier waiver variants, in the order the templates table shows them. */
export const WAIVER_TYPES = [
	{ key: "conditionalProgress", label: "Conditional progress" },
	{ key: "unconditionalProgress", label: "Unconditional progress" },
	{ key: "conditionalFinal", label: "Conditional final" },
	{ key: "unconditionalFinal", label: "Unconditional final" },
] as const;

export type WaiverType = (typeof WAIVER_TYPES)[number]["key"];

export interface StateWaiverTemplates {
	state: string;
	templates: Record<WaiverType, string>;
}

const drive = (id: string): string => `https://drive.google.com/file/d/${id}/view`;

/**
 * Supplier waiver templates per state, hosted on Google Drive. Texas has no templates yet.
 * The Oregon final waivers point to the same files as the Oklahoma ones: pending confirmation.
 */
export const WAIVER_TEMPLATES: readonly StateWaiverTemplates[] = [
	{
		state: "Arizona",
		templates: {
			conditionalProgress: drive("1fkftjI2y75KAPe9ZZr77cuEdgT9-Zlj3"),
			unconditionalProgress: drive("1b4YoNmXQUvL2L0M_Gl1Oupu4BFsQ6gEf"),
			conditionalFinal: drive("1EXlbZ8FpY6XpIxJu1POJKRV2AKF7ikJ1"),
			unconditionalFinal: drive("1WCe9jLsA7kYWI9_RFFGOgUMiN7Q4HF-3"),
		},
	},
	{
		state: "California",
		templates: {
			conditionalProgress: drive("1UOEWsgr5SiS1TDMh37ngxj4DtXORUwsM"),
			unconditionalProgress: drive("1RawbdtQcoPNJWLNOCAHbbV8bflSq2F7L"),
			conditionalFinal: drive("1RSf6EUFr_61905o7KJQVZ8313466WueC"),
			unconditionalFinal: drive("1GmU1t_LJ3hXEuvcMKn3JNVia6JW-koC2"),
		},
	},
	{
		state: "Colorado",
		templates: {
			conditionalProgress: drive("1BgmQXTr-aQQQ1hzG4mcFOdVc0MmBrke9"),
			unconditionalProgress: drive("1FlsuJ_YSkO7QlLyVnYH3964Dl2w4Qdh5"),
			conditionalFinal: drive("17duBA-s86aksSRH7NFDyO8KQ1y8tSm2i"),
			unconditionalFinal: drive("14PDYJpkAcaPicKI9TTu0SfCjA0vKmpV3"),
		},
	},
	{
		state: "Idaho",
		templates: {
			conditionalProgress: drive("1IN5wkExD6auexKWUQt3bGIBe7-lf0Boh"),
			unconditionalProgress: drive("1dwPJaGjnWa6q8v7EwWfk4gHxZUhECmzA"),
			conditionalFinal: drive("1IUXgkb0LRT1xjnySQETC5EziKtN-nMx3"),
			unconditionalFinal: drive("1Wl1O6o7Cl0p3nZyBOfgiXl3XttCJ3wqA"),
		},
	},
	{
		state: "Nevada",
		templates: {
			conditionalProgress: drive("18fxqizy_CbUvgEFpYrpjDrqo_jBFDN1W"),
			unconditionalProgress: drive("1yn4QStsC3rGbtgu5_V45kQcs8OzrfWqU"),
			conditionalFinal: drive("1SiUw7gQG1kHuxQh5ZANG6wG5xL77rRqv"),
			unconditionalFinal: drive("1Wm_SQXWaU4V1um8poBoDfF9M8YXs4onc"),
		},
	},
	{
		state: "Oklahoma",
		templates: {
			conditionalProgress: drive("1w3T63KzEQKXZTCnz6mBZvhEo6YhW6gYT"),
			unconditionalProgress: drive("1kaEdnIc7kwHQ6mfQ7S5hNSJR8_qqgtie"),
			conditionalFinal: drive("1LrRhybvtyncanfrFRMie1USBnJ4v1nlw"),
			unconditionalFinal: drive("1TrvjhA5AbZ3dZv_eUZEFLegD8iJeebMS"),
		},
	},
	{
		state: "Oregon",
		templates: {
			conditionalProgress: drive("1g1wPGmKKPVVmkpm-UtYOEaca_syPnx4P"),
			unconditionalProgress: drive("1Qc4s19O2mbx1tbXY0g6sOCTW0GHX0jOx"),
			conditionalFinal: drive("1LrRhybvtyncanfrFRMie1USBnJ4v1nlw"),
			unconditionalFinal: drive("1TrvjhA5AbZ3dZv_eUZEFLegD8iJeebMS"),
		},
	},
	{
		state: "Utah",
		templates: {
			conditionalProgress: drive("1xEG_zdieVMoe6BLEV9PTjRf9BthIDe-3"),
			unconditionalProgress: drive("1ZEh0MDuDF--gJoDbrt9MWzZNxJXi2L8w"),
			conditionalFinal: drive("1PHPvjept-QhUCs3gOnWKIWKNqp1SKbYr"),
			unconditionalFinal: drive("1fUFIxrW1ZcH356gc2peDB2OA3VaLn7Ih"),
		},
	},
	{
		state: "Washington",
		templates: {
			conditionalProgress: drive("1Kk2olLuzoGUDkId0PtyURiiQUiir4Bk-"),
			unconditionalProgress: drive("1s-6AkDzmX_gO3iyZZDLLwlap0sJYrZpv"),
			conditionalFinal: drive("1Bzi6Oek-Ab8fr5NlKxYqVvZy2TN2mqH4"),
			unconditionalFinal: drive("1YYEkC8vIXDUzEEcXLyhhT9XHu18rcZqk"),
		},
	},
	{
		state: "Wyoming",
		templates: {
			conditionalProgress: drive("12TlUTAO5tyhF_Q6LxC_Wcwxj4y0RpTcH"),
			unconditionalProgress: drive("1LRMbWGUmG_tJzQWbwFA5pH1L75Eq6TsT"),
			conditionalFinal: drive("1OwpCrZ09ANeT8nmMFRvDDxfLGZ4cQY7d"),
			unconditionalFinal: drive("13H0vpHtNfaas9rQOs4Q0HMBfCAFD8qNL"),
		},
	},
];
