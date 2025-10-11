

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoChevronExpand = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M136 208L256 104L376 208" fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
          <Path  d="M136 304L256 408L376 304" fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }

