

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolNumeric = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11 1v4h4v1h-4v4h4v1h-4v4h-1v-4H6v4H5v-4H1v-1h4V6H1V5h4V1h1v4h4V1h1zM6 6v4h4V6H6z" />
        </G>
      </Svg>
    );
  }

