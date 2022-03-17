import Button from '../Button';
import { Container } from './style';
import Link from 'next/link';

export default function ArrowBack({ href, hrefA }) {
  return (
    <Link href={href}>
      <a href={hrefA}>
        <Container>
          <Button noPadding link>
            <span class="material-icons-outlined">
              arrow_back
            </span>
          </Button>
        </Container>
      </a>
    </Link>
  )
}