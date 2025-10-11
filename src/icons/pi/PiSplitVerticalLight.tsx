

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSplitVerticalLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M214,152a6,6,0,0,1-6,6H134v59.51l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51V158H48a6,6,0,0,1,0-12H208A6,6,0,0,1,214,152ZM48,110H208a6,6,0,0,0,0-12H134V38.49l21.76,21.75a6,6,0,0,0,8.48-8.48l-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L122,38.49V98H48a6,6,0,0,0,0,12Z" />
        </G>
      </Svg>
    );
  }

