

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFunctionThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M204,40a4,4,0,0,1-4,4H170.71a28,28,0,0,0-27.55,23l-10.37,57H184a4,4,0,0,1,0,8H131.34l-10.63,58.44A36,36,0,0,1,85.29,220H56a4,4,0,0,1,0-8H85.29a28,28,0,0,0,27.55-23l10.37-57H72a4,4,0,0,1,0-8h52.66l10.63-58.44A36,36,0,0,1,170.71,36H200A4,4,0,0,1,204,40Z" />
        </G>
      </Svg>
    );
  }

