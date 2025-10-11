

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSidebarRight = (props: IconProps) => {

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
          <Path  d="M3 4H17V20H3V4ZM5 6H15V18H5V6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          <Path  d="M21 4H19V20H21V4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

