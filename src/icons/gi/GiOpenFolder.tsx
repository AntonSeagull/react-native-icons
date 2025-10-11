

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiOpenFolder = (props: IconProps) => {

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
          <Path d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z" fill="#000" />
        </G>
      </Svg>
    );
  }

