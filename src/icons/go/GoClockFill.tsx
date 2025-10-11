

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoClockFill = (props: IconProps) => {

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
          <Path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11.575-4.75a.825.825 0 1 0-1.65 0v5.5c0 .296.159.57.416.716l3.5 2a.825.825 0 0 0 .818-1.432l-3.084-1.763Z" />
        </G>
      </Svg>
    );
  }

