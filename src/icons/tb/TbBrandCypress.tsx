

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCypress = (props: IconProps) => {

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
          <Path  d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577" />
          <Path  d="M13.5 9l2 6" />
          <Path  d="M10.764 9.411a3 3 0 1 0 -.023 5.19" />
        </G>
      </Svg>
    );
  }

