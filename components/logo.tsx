import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image src="/images/N-HiTec_logo_slogan.png" alt="N-HiTec Logo" width={180} height={60} priority />
      </div>
    </Link>
  )
}

