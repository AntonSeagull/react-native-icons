

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandYahoo = (props: IconProps) => {

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
          <Path  d="M3 6l5 0" />
          <Path  d="M7 18l7 0" />
          <Path  d="M4.5 6l5.5 7v5" />
          <Path  d="M10 13l6 -5" />
          <Path  d="M12.5 8l5 0" />
          <Path  d="M20 11l0 4" />
          <Path  d="M20 18l0 .01" />
        </G>
      </Svg>
    );
  }

