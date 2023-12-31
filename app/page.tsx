import Link from "next/link"

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button"
import { HoverCardDemo } from "@/components/HoverDemo"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Jun Show: Cloud Bookmarks
          <br className="hidden sm:inline" />
          Share TOP Resources all over the world.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          俊秀 · 云书签 <br className="hidden sm:inline" />
          分享全球最顶尖的设计、前端等资源 使用 Next.js 和 @shadcn/ui 构建
        </p>
      </div>
      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
      <div className="flex gap-8">
        <div className="text-xl">UI Design:</div>
        <HoverCardDemo name="Arco Design" url="https://arco.design" />
        <HoverCardDemo name="Ant Design" url="https://ant.design" />
        <HoverCardDemo name="Semi Design" url="https://semi.design" />
        <HoverCardDemo name="Tailwind UI" url="https://tailwindui.com" />
        <HoverCardDemo name="Tailwind CSS" url="https://tailwindcss.com" />
        <HoverCardDemo name="Unsplash" url="https://unsplash.com" />
      </div>
      <div className="flex gap-8">
        <HoverCardDemo name="@shadcn/ui" url="https://ui.shadcn.com" />
        <HoverCardDemo name="Microsoft Fluent UI" url="https://developer.microsoft.com/en-us/fluentui#/" />
        <HoverCardDemo name="Google Material Design" url="https://m3.material.io" />
        <HoverCardDemo name="MUI" url="https://mui.com" />
        <HoverCardDemo name="Radix UI" url="https://www.radix-ui.com" />
      </div>
      <div className="flex gap-8">
        <div className="text-xl">Front End Framework:</div>
        <HoverCardDemo name="Next.js" url="https://nextjs.org" />
        <HoverCardDemo name="Vitepress" url="https://vitepress.dev" />
        <HoverCardDemo name="Vite" url="https://vitejs.dev" />
        <HoverCardDemo name="React" url="https://react.dev" />
        <HoverCardDemo name="Vue" url="https://vuejs.org" />
        <HoverCardDemo name="Node.js" url="https://nodejs.org/en/docs" />
      </div>
      <div className="flex gap-8">
        <div className="text-xl">AI :</div>
        <HoverCardDemo name="BingGPT" url="https://chat.jun.one" />
      </div>
      <div className="flex gap-8">
        <div className="text-xl">Front End Tech:</div>
        <HoverCardDemo name="Three.js" url="https://threejs.org" />
        <HoverCardDemo name="TypeScript" url="https://www.typescriptlang.org" />
        <HoverCardDemo name="MDN" url="https://developer.mozilla.org" />
        <HoverCardDemo name="Can I Use" url="https://caniuse.com" />
        <HoverCardDemo name="W3C" url="https://www.w3.org" />
        <HoverCardDemo name="Web.dev" url="https://web.dev" />
        <HoverCardDemo name="Web Fundamentals" url="https://developers.google.com/web/fundamentals" />
        <HoverCardDemo name="Codepen" url="https://codepen.io/trending" />
        <HoverCardDemo name="掘金" url="https://juejin.cn/" />
        <HoverCardDemo name="AntV" url="https://antv.vision/zh" />
        <HoverCardDemo name="D3" url="https://d3js.org" />
        <HoverCardDemo name="DataEase" url="https://dataease.io/" />
        <HoverCardDemo name="Echarts" url="https://echarts.apache.org/zh/index.html" />
        <HoverCardDemo name="Stackblitz" url="https://developer.stackblitz.com/" />
        <HoverCardDemo name="CodeSandbox" url="https://codesandbox.io/" />
      </div>
      <div className="flex gap-8">
        <div className="text-xl">VPN :</div>
        <HoverCardDemo name="BingGPT" url="https://chat.jun.one" />
      </div>
    </section>
  )
}
