

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMicrosoft = (props: IconProps) => {

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
          <Path  d="M3 3H11V11H3V3Z" fill="currentColor" />
          <Path  d="M3 13H11V21H3V13Z" fill="currentColor" />
          <Path  d="M13 3H21V11H13V3Z" fill="currentColor" />
          <Path  d="M13 13H21V21H13V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

