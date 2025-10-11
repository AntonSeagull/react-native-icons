

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandBinance = (props: IconProps) => {

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
          <Path  d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
          <Path  d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
          <Path  d="M20 10l2 2l-2 2l-2 -2z" />
          <Path  d="M4 10l2 2l-2 2l-2 -2z" />
          <Path  d="M12 10l2 2l-2 2l-2 -2z" />
        </G>
      </Svg>
    );
  }

