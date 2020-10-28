import React from 'react'
import { useClientInfo } from '../../hooks'
import { widths } from '../../styles/variables'
import { DesktopSkillsSection } from './DesktopSkillsSection'
import { MobileSkillsSection } from './MobileSkillsSection'

export const SkillsSection: React.FC = () => {
  const { cw, ch } = useClientInfo(widths.xl)

  return cw <= 768 || ch < 480 || ch > cw * 1.1 ? <MobileSkillsSection /> : <DesktopSkillsSection />
}
