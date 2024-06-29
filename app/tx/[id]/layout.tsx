import type { Metadata, ResolvingMetadata } from 'next'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id


  // ANG PARAMS ID MAG INDICATE UNSA NA DATA TREE

//   const data = await fetch('https://cuddly-space-robot-rj7759vq963p46x-3000.app.github.dev/data.json').then((res) => res.json())

// console.log(data)
 
  // fetch data
  const product = await fetch(`https://manaboss-default-rtdb.firebaseio.com/tx/${id}.json`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    icons: {
        icon: "https://opensea.io/static/images/favicon/32x32.png", apple: "https://opensea.io/static/images/favicon/32x32.png" 
    },
    // openGraph: {
    //   images: product.image,
    // },
  }
}
 
export async function Page({ params, searchParams }: Props 
    
) {
        // return (
        //     <html lang="en">
        //     <body>{children}</body>
        //   </html>
        // )
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet"
        data-href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&amp;display=block" />
    <link rel="stylesheet"
    data-href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
   integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
  ></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
   integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" />
    <meta content="summary_large_image" property="twitter:card" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdn.tiny.cloud/1/h7anlv9v7lqmy67olovnicn9dgbjnnp72vguxxat5wihkmzi/tinymce/5/tinymce.min.js"
     ></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
      integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
      ></script>
      
      <link href="https://giterhaber.github.io/qrqr/custom.css" rel="stylesheet"/>
   <link href="https://giterhaber.github.io/qrqr/style.css" rel="stylesheet"/>
   <link rel="stylesheet" href="https://giterhaber.github.io/qrqr/support.css"/>

    <meta content="width=device-width,initial-scale=1" name="viewport"/>
    <link href="https://giterhaber.github.io/qrqr/favicon.ico" rel="shortcut icon"/>
    
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    );
  }
  