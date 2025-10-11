

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoJournal = (props: IconProps) => {

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
          <Path d="M290,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H290Z" />
          <Path d="M368,32H350V480h18a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32Z" />
        </G>
      </Svg>
    );
  }

