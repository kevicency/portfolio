import React from 'react'
import { useClientInfo } from '../../hooks'
import { widths } from '../../styles/variables'
import { DesktopSkillsSection } from './DesktopSkillsSection'
import { MobileSkillsSection } from './MobileSkillsSection'

export const SkillsSection: React.FC = () => {
  const { cw } = useClientInfo(widths.xl)

  console.log({ cw })

  return cw > 768 ? <DesktopSkillsSection /> : <MobileSkillsSection />
}
