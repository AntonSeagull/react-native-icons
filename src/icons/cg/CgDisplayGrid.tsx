

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDisplayGrid = (props: IconProps) => {

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
          <Path  d="M7 7V11H11V7H7Z" fill="currentColor" />
          <Path  d="M13 7H17V11H13V7Z" fill="currentColor" />
          <Path  d="M13 13V17H17V13H13Z" fill="currentColor" />
          <Path  d="M7 13H11V17H7V13Z" fill="currentColor" />
          <Path  d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

