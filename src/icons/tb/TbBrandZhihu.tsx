

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandZhihu = (props: IconProps) => {

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
          <Path  d="M14 6h6v12h-2l-2 2l-1 -2h-1z" />
          <Path  d="M4 12h6.5" />
          <Path  d="M10.5 6h-5" />
          <Path  d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" />
          <Path  d="M8 6v7c0 4.5 -2 5.5 -4 7" />
          <Path  d="M11 18l-3 -5" />
        </G>
      </Svg>
    );
  }

