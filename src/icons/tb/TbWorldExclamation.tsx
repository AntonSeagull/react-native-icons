

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldExclamation = (props: IconProps) => {

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
          <Path  d="M20.986 12.51a9 9 0 1 0 -5.71 7.873" />
          <Path  d="M3.6 9h16.8" />
          <Path  d="M3.6 15h10.9" />
          <Path  d="M11.5 3a17 17 0 0 0 0 18" />
          <Path  d="M12.5 3a17 17 0 0 1 0 18" />
          <Path  d="M19 16v3" />
          <Path  d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

