export { Sponsors }
export type { Sponsor }

import React from 'react'
import { assert } from '@brillout/docpress'
import { sponsorsList } from './sponsorsList'

type Plan = 'indie' | 'bronze' | 'silver' | 'gold' | 'platinum'

type Sponsor = {
  companyName: string
  companyLogo: string
  website: string
  plan: Plan
  divSize?: Partial<DivSize>
  github: string
}

type DivSize = {
  width: number
  height: number
  padding: number
}

function Sponsors() {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <SponsorButton />
      <p
        style={{
          marginTop: 12,
          marginBottom: 12,
          fontSize: '1.05em',
          padding: '0 var(--main-view-padding)'
        }}
      >
        Sponsor Vike for a tight-knit partnership 🤝
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'end' }}>
        {sponsorsList.map((sponsor, i) => (
          <SponsorDiv sponsor={sponsor} key={i} />
        ))}
      </div>
    </div>
  )
}

function SponsorButton() {
  return (
    <a
      className="button"
      style={{
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '5px 10px',
        marginBottom: 10
      }}
      href="https://github.com/sponsors/vikejs"
    >
      Become a sponsor
    </a>
  )
}

function SponsorDiv({ sponsor }: { sponsor: Sponsor }) {
  return <CompanyDiv sponsor={sponsor} />
}

function CompanyDiv({ sponsor }: { sponsor: Sponsor }) {
  const { width, height, padding } = getSize(sponsor)
  const marginHeight = 20
  const marginWidth = 10
  return (
    <a
      href={sponsor.website}
      style={{
        margin: `${marginHeight}px ${marginWidth}px`
      }}
    >
      <div
        style={{
          backgroundColor: '#ebebeb',
          borderRadius: 7,
          overflow: 'hidden',
          width,
          maxWidth: `calc(100vw - 2 * var(--main-view-padding) - 2 * ${marginWidth}px)`,
          height,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <img
          style={{ width: `calc(100% - ${padding}px)`, height: height - padding, objectFit: 'contain' }}
          src={sponsor.companyLogo}
          alt={sponsor.companyName}
        />
      </div>
    </a>
  )
}

function getSize(sponsor: Sponsor): DivSize {
  const { plan } = sponsor
  let divSize: DivSize | undefined
  if (plan === 'platinum') {
    divSize = { width: 500, height: 180, padding: 100 }
  }
  if (plan === 'gold') {
    divSize = { width: 400, height: 150, padding: 95 }
  }
  if (plan === 'silver') {
    divSize = { width: 300, height: 100, padding: 45 }
  }
  if (plan === 'bronze') {
    divSize = { width: 200, height: 70, padding: 30 }
  }
  if (plan === 'indie') {
    divSize = { width: 140, height: 50, padding: 20 }
  }
  assert(divSize)
  if (sponsor.divSize) {
    Object.assign(divSize, sponsor.divSize)
  }
  return divSize
}
