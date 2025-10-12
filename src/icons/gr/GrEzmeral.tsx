

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrEzmeral = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7 8H41V16H7V8Z" fill="#01A982" />
          <Path  d="M1 8H7V16H1V8Z" fill="#00775B" />
          <Path  d="M41 8H47V16H41V8Z" fill="#00775B" />
          <Path  d="M7 16H41V22H7V16Z" fill="#00775B" />
          <Path  d="M7 2H41V8H7V2Z" fill="#00C781" />
          <Path  d="M1 8L7 2V8H1Z" fill="#01A982" />
          <Path  d="M1 16L7 22V16H1Z" fill="#01A982" />
          <Path  d="M47 8L41 2V8H47Z" fill="#01A982" />
          <Path  d="M47 16L41 22V16H47Z" fill="#01A982" />
        </G>
      </Svg>
    );
  }

