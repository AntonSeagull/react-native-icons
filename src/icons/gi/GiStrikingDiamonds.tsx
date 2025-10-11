

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiStrikingDiamonds = (props: IconProps) => {

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
          <Path  d="M30.875 36.063L88.25 300.625 202.406 400.97l24.688-76.814L30.874 36.062zm102 42.343L333.72 198.344l96.374 2.375-46.78-68.345-250.44-53.97zm3.5 42.28l202 284.595 149.5 78.626L440.78 365.78 136.376 120.69z" />
        </G>
      </Svg>
    );
  }

