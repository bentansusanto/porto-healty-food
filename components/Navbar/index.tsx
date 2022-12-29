import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'


function Navbar() {
    const link = [
        {page : 'Homepage', link : '/'},
        {page : 'About', link : '/about'},
        {page : 'Menu', link : ''},
    ]
  return (
    <div>
        <nav className={styles.nav}>
            {/* logo */}
            <div>
                <Link href={'/'} className={styles.Logo}>
                    JXB Food<span className='text-orange'>.</span>
                </Link>
            </div>

            {/* Link */}
            <ul className={styles.navigation}>
                {
                    link.map((val,idx) => (
                        <li key={idx}>
                            <Link href={val.link}>
                                {val.page}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar