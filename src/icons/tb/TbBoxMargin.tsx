

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxMargin = (props: IconProps) => {

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
          <Path  d="M8 8h8v8h-8z" />
          <Path  d="M4 4v.01" />
          <Path  d="M8 4v.01" />
          <Path  d="M12 4v.01" />
          <Path  d="M16 4v.01" />
          <Path  d="M20 4v.01" />
          <Path  d="M4 20v.01" />
          <Path  d="M8 20v.01" />
          <Path  d="M12 20v.01" />
          <Path  d="M16 20v.01" />
          <Path  d="M20 20v.01" />
          <Path  d="M20 16v.01" />
          <Path  d="M20 12v.01" />
          <Path  d="M20 8v.01" />
          <Path  d="M4 16v.01" />
          <Path  d="M4 12v.01" />
          <Path  d="M4 8v.01" />
        </G>
      </Svg>
    );
  }

