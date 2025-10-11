

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBookmarkBold = (props: IconProps) => {

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
          <Path d="M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,24V154.35l-45.65-28.53a12,12,0,0,0-12.72,0L76,154.35V52ZM134.35,173.82a12,12,0,0,0-12.72,0L76,202.35v-19.7l52-32.5,52,32.5v19.7Z" />
        </G>
      </Svg>
    );
  }

