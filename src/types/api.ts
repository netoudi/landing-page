export type LogoProps = {
  alternativeText: string
  url: string
}

type Image = {
  alternativeText
  url
}

type Button = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: Image
  button: Button
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

type TechIcon = {
  title: string
  icon: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
}
