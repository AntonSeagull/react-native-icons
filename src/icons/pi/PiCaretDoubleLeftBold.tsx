

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretDoubleLeftBold = (props: IconProps) => {

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
          <Path d="M208.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L137,128ZM57,128l71.52-71.51a12,12,0,0,0-17-17l-80,80a12,12,0,0,0,0,17l80,80a12,12,0,0,0,17-17Z" />
        </G>
      </Svg>
    );
  }

