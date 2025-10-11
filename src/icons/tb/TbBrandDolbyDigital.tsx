

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDolbyDigital = (props: IconProps) => {

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
          <Path  d="M21 6v12h-.89c-3.34 0 -6.047 -2.686 -6.047 -6s2.707 -6 6.046 -6h.891z" />
          <Path  d="M3.063 6v12h.891c3.34 0 6.046 -2.686 6.046 -6s-2.707 -6 -6.046 -6h-.89z" />
        </G>
      </Svg>
    );
  }

