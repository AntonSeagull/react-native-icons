

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoColorFillSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M416,320s-64,48-64,99.84c0,33.28,28.67,60.16,64,60.16s64-27,64-60.16C480,368,416,320,416,320Z" />
          <Path  d="M144,32,68,108l70,70L32,280,208,464,360.8,315.7,416,304Zm24,116-39.6-41,15.88-15.89L184,132Z" />
        </G>
      </Svg>
    );
  }

