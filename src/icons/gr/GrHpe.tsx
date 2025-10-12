

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrHpe = (props: IconProps) => {

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
          <Path  d="M2 6H46V18H2V6ZM5 9H43V15H5V9Z" fill="#00C781" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

