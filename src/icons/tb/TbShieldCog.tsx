

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShieldCog = (props: IconProps) => {

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
          <Path  d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.568 1.933 .635 3.957 .223 5.89" />
          <Path  d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M19.001 15.5v1.5" />
          <Path  d="M19.001 21v1.5" />
          <Path  d="M22.032 17.25l-1.299 .75" />
          <Path  d="M17.27 20l-1.3 .75" />
          <Path  d="M15.97 17.25l1.3 .75" />
          <Path  d="M20.733 20l1.3 .75" />
        </G>
      </Svg>
    );
  }

