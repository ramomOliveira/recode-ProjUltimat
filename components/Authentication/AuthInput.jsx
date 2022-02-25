
import { Container } from './style';

export default function AuthInput({ label, value, valueChanged, type = "text", property, doNotRender }) {
  return doNotRender ? null : (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={event => valueChanged?.(event.target.value)}
        property={property}
      />
    </Container>
  )
}