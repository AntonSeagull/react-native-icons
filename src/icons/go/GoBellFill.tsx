

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoBellFill = (props: IconProps) => {

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
          <Path d="M6 8a6 6 0 1 1 12 0v2.917c0 .703.228 1.387.65 1.95L20.7 15.6a1.5 1.5 0 0 1-1.2 2.4h-15a1.5 1.5 0 0 1-1.2-2.4l2.05-2.733a3.25 3.25 0 0 0 .65-1.95Zm6 13.5A3.502 3.502 0 0 1 8.645 19h6.71A3.502 3.502 0 0 1 12 21.5Z" />
        </G>
      </Svg>
    );
  }

