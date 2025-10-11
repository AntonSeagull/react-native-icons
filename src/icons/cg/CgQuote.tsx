

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgQuote = (props: IconProps) => {

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
          <Path  d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="currentColor" />
          <Path  d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

