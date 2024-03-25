import { ArrowBackIcon } from '@chakra-ui/icons'
import { Buttond, Container, IconButton, Stack, Text } from '@chakra-ui/react'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Logo } from './Logo'

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
          <Button as="a" href="#" aria-label="LinkedIn" icon={<ArrowBackIcon />} />

      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)