

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoRss = (props: IconProps) => {

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
          <Path d="M3.5 3.25a.75.75 0 0 1 .75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 0 1-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 0 1-.75-.75Zm.75 6.25C10.187 9.5 15 14.313 15 20.25a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 4.25 11a.75.75 0 0 1 0-1.5ZM3.5 19a2 2 0 1 1 3.999-.001A2 2 0 0 1 3.5 19Z" />
        </G>
      </Svg>
    );
  }

