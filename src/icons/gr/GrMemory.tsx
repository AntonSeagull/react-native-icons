

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMemory = (props: IconProps) => {

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
          <Path d="M10 18h4m-4-4h4m-4-4h4m-4-4h4m6 12h3m-3-4h3m-3-4h3m-3-4h3M1 18h3m-3-4h3m-3-4h3M1 6h3m11 14h4a1 1 0 001-1V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v14a1 1 0 001 1zM5 20h4a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </G>
      </Svg>
    );
  }

