

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoImagesOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M432,112V96a48.14,48.14,0,0,0-48-48H64A48.14,48.14,0,0,0,16,96V352a48.14,48.14,0,0,0,48,48H80" />
          <Path d="M342.15,372.17,255,285.78a30.93,30.93,0,0,0-42.18-1.21L96,387.64" />
          <Path d="M265.23,464,383.82,346.27a31,31,0,0,1,41.46-1.87L496,402.91" />
        </G>
      </Svg>
    );
  }

