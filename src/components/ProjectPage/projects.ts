
export type Project = {
	readonly id: string,
	readonly title: string,
	readonly desc: string,
	readonly tech: string,
	readonly github: string,
	readonly link: string,
	readonly dim: {
		readonly width: number,
		readonly height: number,
	},
    readonly info: readonly {
        readonly line: string,
    }[],
	readonly img: string,
};
