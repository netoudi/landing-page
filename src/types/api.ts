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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
