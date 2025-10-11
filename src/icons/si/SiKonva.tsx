

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiKonva = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.391 18.541-.239-3.76-2.391-1.608.152 5.129-4.325.152-.173-13.409L10.5 4.98l.087 5.346 2.217-1.608.109-3.781 4.412.283-.348 4.586-2.608 1.608 2.673 1.174.913 5.694-4.564.259z" />
        </G>
      </Svg>
    );
  }

