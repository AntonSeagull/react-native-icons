

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineRightLight = (props: IconProps) => {

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
          <Path d="M148.24,123.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48-8.48L135.51,128,59.76,52.24a6,6,0,0,1,8.48-8.48ZM184,42a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V48A6,6,0,0,0,184,42Z" />
        </G>
      </Svg>
    );
  }

