

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBedThin = (props: IconProps) => {

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
          <Path d="M216,76H28V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H244v36a4,4,0,0,0,8,0V112A36,36,0,0,0,216,76ZM28,84h80v80H28Zm88,80V84H216a28,28,0,0,1,28,28v52Z" />
        </G>
      </Svg>
    );
  }

