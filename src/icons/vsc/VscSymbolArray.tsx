

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolArray = (props: IconProps) => {

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
          <Path d="M1.5 2l-.5.5v11l.5.5H4v-1H2V3h2V2H1.5zm13 12l.5-.5v-11l-.5-.5H12v1h2v10h-2v1h2.5z" />
        </G>
      </Svg>
    );
  }

