

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPowerOutline = (props: IconProps) => {

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
          <Path d="M378,108a191.41,191.41,0,0,1,70,148c0,106-86,192-192,192S64,362,64,256a192,192,0,0,1,69-148" />
        </G>
      </Svg>
    );
  }

