import type { StoryFn, Meta } from "@storybook/react"
import { AspectRatio, Image } from "@yamada-ui/react"

type Story = StoryFn<typeof AspectRatio>

const meta: Meta<typeof AspectRatio> = {
  title: "Components / Layouts / AspectRatio",
  component: AspectRatio,
}

export default meta

export const basic: Story = () => {
  return (
    <AspectRatio w="md">
      <Image
        src="http://shin-godzilla.jp/ortho/images/bg.jpg"
        alt="シン・ゴジラ"
      />
    </AspectRatio>
  )
}

export const withRatio: Story = () => {
  return (
    <AspectRatio w="full" ratio={16 / 9}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp"
      />
    </AspectRatio>
  )
}
