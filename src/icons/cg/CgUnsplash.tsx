

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgUnsplash = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M15 4.5H9V8.5H15V4.5Z" fill="currentColor" />
          <Path d="M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

