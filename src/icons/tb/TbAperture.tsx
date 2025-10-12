

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAperture = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M3.6 15h10.55" />
          <Path  d="M6.551 4.938l3.26 10.034" />
          <Path  d="M17.032 4.636l-8.535 6.201" />
          <Path  d="M20.559 14.51l-8.535 -6.201" />
          <Path  d="M12.257 20.916l3.261 -10.034" />
        </G>
      </Svg>
    );
  }

