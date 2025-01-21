export interface IBuildPaths {
	entry: string
	html: string
	output: string
	src: string
	public: string
}

export type TypeMode = 'development' | 'production'
export type TypePLatform = 'desktop' | 'mobile'

export interface IBuildOptions {
	port: number
	paths: IBuildPaths
	mode: TypeMode
	analyzer?: boolean
	platform?: TypePLatform
}
